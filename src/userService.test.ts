import { getUserDetails } from "./userService";
import { fetchUserData } from "./api";

jest.mock("./api");

describe("getUserDetails", () => {
  it("should fetch and process user data correctly", async () => {
    const mockUserData = {
      id: 1,
      name: "Nicolas Thompson",
      email: "mail@nicolasthompson.com",
    };

    const mockedFetchUserData = jest.mocked(fetchUserData);
    mockedFetchUserData.mockResolvedValue(mockUserData);

    const userDetails = await getUserDetails(1);

    expect(userDetails).toEqual({
      id: 1,
      name: "Nicolas Thompson",
      email: "mail@nicolasthompson.com",
    });

    expect(mockedFetchUserData).toHaveBeenCalledWith(1);
  });
});
