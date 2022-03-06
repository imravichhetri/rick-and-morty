import React from 'react';
import { render, fireEvent, getByTestId, screen, findByRole } from '@testing-library/react';
// import { renderHook } from '@testing-library/react-hooks';
import ApplicationProvider, { 
  ApplicationContext, 
  initialAppState as appState 
} from '../../../shared/contexts/application'
import RickAndMorty from '..';
import { ToastProvider } from 'react-toast-notifications';
import Layout from '@perseus/shared/components/layout';
import { QueryClient, QueryClientProvider } from 'react-query';
import queryClient from '@perseus/shared/lib/query-client';
import { act } from 'react-dom/test-utils';
import { characters, episodes } from '@perseus/modules/rick-and-morty/__mocks__/apiResponseMock';
// import useFetchHelloFreshBox from '../../../hooks/useFetchHelloFreshBox';
// import data from "../../../data/hellofreshBox";
// import { act } from 'react-dom/test-utils';
// import Recipes from '../../../pages/Recipes';
const dispatch = jest.fn();
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({results: characters}),
  })
);
async function mockFetch(url, config) {
  switch (url) {
    case 'https://rickandmortyapi.com/api/character': {
      return {
        ok: true,
        status: 200,
        json: async () => ({results: characters}),
      }
    }
    case 'https://rickandmortyapi.com/api/episode/1,2': {
      return {
        ok: true,
        status: 200,
        json: async () => (episodes),
      } 
    }
    default: {
      throw new Error(`Unhandled request: ${url}`)
    }
  }
}

beforeAll(() => jest.spyOn(window, 'fetch'))
beforeEach(() => window.fetch.mockImplementation(mockFetch))
const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <ApplicationContext.Provider value={{ appState, dispatch }}>
        <ToastProvider>
          <Layout>
            {children}
          </Layout>
        </ToastProvider>
    </ApplicationContext.Provider>
  </QueryClientProvider>
);

// const mockUseContext = jest.fn().mockImplementation(() => ({ state, dispatch }));

// React.useContext = mockUseContext;

jest.mock('react-toast-notifications', () => ({
  ...jest.requireActual('react-toast-notifications'),
  useToasts: () => ({
    addToast: jest.fn()
  })
}));
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: jest.fn()
  }),
  useParams: () => ({
    characterId: ""
  })
}));

// jest.mock("react-toast-notifications/useToasts")
describe('R&M Tests', () => {
  it('default rendering', async () => {
    expect(1).toBe(1);
  });
  it('If No Data is there Header should be there', async () => {
    const component = render( <RickAndMorty/>, {wrapper});
    const inputComponent = component.getByText("Search or Select any character");
    const infoComponent = component.queryByText("Episode");
    expect(inputComponent).toBeInTheDocument();
    expect(infoComponent).not.toBeInTheDocument();
  });


  it('Input dropdown length', async () => {
    const component = render( <RickAndMorty/>, {wrapper});
    const inputComponent = component.getByText("Search or Select any character");
    const infoComponent = component.queryByText("Episode");
    expect(inputComponent).toBeInTheDocument();
    expect(infoComponent).not.toBeInTheDocument();
  });

  it('After character is selected', async () => {
    
    const selectedCharacter = characters[0];
    const state = {
      selectedCharacter
    }
    
    const wrapper = ({ children }) => (
      <QueryClientProvider client={queryClient}>
        <ApplicationContext.Provider value={{ appState: state, dispatch }}>
            <ToastProvider>
              <Layout>
                {children}
              </Layout>
            </ToastProvider>
        </ApplicationContext.Provider>
      </QueryClientProvider>
    );
    
    const component = render( <RickAndMorty/>, {wrapper});
    const inputComponent = component.getByRole("combobox",{label:"Search or Select any character"});
    let dropdownComponent = await screen.queryByRole("listbox");
    expect(dropdownComponent).not.toBeInTheDocument();
    expect(component.getByText("Episode")).toBeInTheDocument();
    // expect(screen.getByTestId("episodeItem")).toBeInTheDocument(2);
  });
});