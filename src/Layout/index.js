import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <>
      <h1>This is Header</h1>
      <Outlet />
    </>
  );
}
