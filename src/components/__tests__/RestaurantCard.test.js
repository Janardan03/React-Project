import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard.js"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"

it("should render restaurant card component with props data", () => {

    render(<RestaurantCard resData={MOCK_DATA}/>);

    const name = screen.getByText("Chinese Wok");

    expect(name).toBeInTheDocument();
})