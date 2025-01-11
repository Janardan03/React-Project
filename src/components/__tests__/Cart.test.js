import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu.js"
import MOCK_DATA from "../mocks/mockResMenu.json"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore.js"
import { BrowserRouter } from "react-router-dom";
import Header from "../Header.js";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            Promise.resolve(MOCK_DATA);
        }
    })
})

it("should load restaurant menu component", async () => {

    await act(async () => render
    (
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
                <RestaurantMenu />
            </Provider>
        </BrowserRouter>
    ));

    const accordionHeader = screen.getByText("Recommended (13)");
    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId("foodItems")).toBe(13);

    const addBtns = screen.getAllByRole("button", {name: "Add +"});
    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();
});