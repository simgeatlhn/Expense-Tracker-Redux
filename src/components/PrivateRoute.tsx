import { Redirect, Route, RouteProps } from "react-router-dom";

//RouteProps un içindeki propsları PrivateRouteProps a da gönderebiliriz
interface PrivateRouteProps extends RouteProps {
  component: React.FC<any>;
}

function PrivateRoute({ component: Component, ...theRest }: PrivateRouteProps) {
  return (
    <Route
      {...theRest}
      render={(props) => {
        const token = localStorage.getItem("token");

        if (token) {
          return <Component {...props} />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
}

export default PrivateRoute;
