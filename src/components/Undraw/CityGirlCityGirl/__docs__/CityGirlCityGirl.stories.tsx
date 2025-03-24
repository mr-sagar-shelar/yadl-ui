import type { Meta, StoryObj } from "@storybook/react";
import CityGirlCityGirl from "../CityGirlCityGirl";

const meta: Meta<typeof CityGirlCityGirl> = { title: "unDraw/CityGirlCityGirl", component: CityGirlCityGirl };

export default meta;
type Story = StoryObj<typeof CityGirlCityGirl>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
