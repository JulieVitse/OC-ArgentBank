import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUser } from 'features/userSlice'


export const AuthGuard = ({ Child }: { Child: React.FC }): JSX.Element => {
  const user = useSelector(selectUser)

  return user ? <Child /> : <Navigate to="/login" />
}