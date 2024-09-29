import { ReactElement } from 'react';
import { render, RenderResult } from '@testing-library/react';
import { MemoryRouter, MemoryRouterProps } from 'react-router-dom';
import { ThemeProvider } from "src/context/ThemeContext";

type RenderWithProvidersProps = {
    route?: string;
    memoryRouterProps?: MemoryRouterProps;
}

export const renderWithProviders = (
    elem: ReactElement,
    {route = '/', memoryRouterProps}: RenderWithProvidersProps = {}
): RenderResult => {
    return render(
        <ThemeProvider>
            <MemoryRouter initialEntries={[route]} {...memoryRouterProps}>
                {elem}
            </MemoryRouter>
        </ThemeProvider>
    );
}
