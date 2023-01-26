import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUser } from 'features/userSlice'

function alertLogin() {
    alert('You are already logged in. Please log out to access this page.')
}

export const NoAuthGuard = ({ Child }: { Child: React.FC }): JSX.Element => {
  const user = useSelector(selectUser)

  return user ? (alertLogin(), (<Navigate to="/account" />)) : <Child />
   
   
}
