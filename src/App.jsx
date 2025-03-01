import { RouterProvider } from 'react-router-dom'
import router from './constants/routes'
import { createTheme, ThemeProvider } from '@mui/material'
import { CustomThemeProvider } from './contexts/CustomThemeProvider/CustomThemeProvider'
import { CartProvider } from './contexts/CartContext/CartContext'

const theme = createTheme({
    palette: {
        primary: {
            main: '#7AA899',
        },
        secondary: {
            main: '#27263D',
        },
        error: {
            main: '#8B7AA8',
        },
        info: {
            main: '#3B3F3D',
        },
    },
})

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CustomThemeProvider value="light">
                <CartProvider>
                    <RouterProvider router={router} />
                </CartProvider>
            </CustomThemeProvider>
        </ThemeProvider>
    )
}

export default App
