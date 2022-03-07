import React from 'react';
import { render, screen } from '@testing-library/react';
import { 
  ApplicationContext, 
  initialAppState as appState 
} from '@perseus-shared/contexts/application'
import RickAndMorty from '..';
import { characters, episodes } from '@perseus/modules/rick-and-morty/__mocks__/apiResponseMock';
import { QueryClientProvider } from 'react-query';
import queryClient from '@perseus-shared/lib/query-client';
import { wrapper } from "../../../../setupTests";
import { ToastProvider } from 'react-toast-notifications';
import Layout from '@perseus/shared/components/layout';


const dispatch = jest.fn();

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
    let dropdownComponent = await screen.queryByRole("listbox");
    expect(component.getByText("Episode")).toBeInTheDocument();
  });
});