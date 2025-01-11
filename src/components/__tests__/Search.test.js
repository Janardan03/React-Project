import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json"
import { act } from "react"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it("should search resList for pizza text input", async () => {

    await act(async () => 
        render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
        ));

    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    
    expect(cardsBeforeSearch.length).toBe(14);
        
    const searchBtn = screen.getByRole("button", {name: "Search"});

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, {target: {value: "pizza"}});

    fireEvent.click(searchBtn);

    const cardsAfterSearch = screen.getAllByTestId("resCard");
    expect(cardsAfterSearch.length).toBe(3);
}); 

it("should filter top rated restaurants", async () => {

    await act(async () => 
        render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
        ));

    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    
    expect(cardsBeforeSearch.length).toBe(14);
        
    const topRatedBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});

    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(2);
});