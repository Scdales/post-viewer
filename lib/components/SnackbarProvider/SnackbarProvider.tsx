import { SnackbarProvider as OriginalSnackbarProvider } from 'notistack'
import { ReactNode } from 'react'

const SnackbarProvider = ({ children }: { children: ReactNode }) => (
  <OriginalSnackbarProvider autoHideDuration={3000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
    {children}
  </OriginalSnackbarProvider>
)

export default SnackbarProvider
