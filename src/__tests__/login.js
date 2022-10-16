import { render, fireEvent } from "@testing-library/react";
import Login from "../components/Login";

test("onSubmit function is called with username and password", () => {
  const handleSubmit = jest.fn();
  const { getByText, getByLabelText } = render(
    <Login onSubmit={handleSubmit} />
  );

  getByLabelText(/username/i).value = 'malwoodsantoro';
  getByLabelText(/password/i).value = '12345';
  fireEvent.click(getByText(/submit/i));

  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleSubmit).toHaveBeenCalledWith({
    username: 'malwoodsantoro',
    password: '12345'
  })
});
