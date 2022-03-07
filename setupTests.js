import 'regenerator-runtime/runtime'
import '@testing-library/jest-dom/extend-expect';
import { characters, episodes } from '@perseus/modules/rick-and-morty/__mocks__/apiResponseMock';
import ApplicationProvider, { 
  ApplicationContext, 
  initialAppState as appState 
} from '@perseus-shared/contexts/application'
import { QueryClient, QueryClientProvider } from 'react-query';
import queryClient from '@perseus/shared/lib/query-client';
import { ToastProvider } from 'react-toast-notifications';
import Layout from '@perseus/shared/components/layout';

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

const dispatch = jest.fn();

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

export const wrapper = ({ children }) => (
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