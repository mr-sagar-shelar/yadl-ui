import type { Meta, StoryObj } from "@storybook/react";
import WeatherApp from "../WeatherApp";

const meta: Meta<typeof WeatherApp> = { title: "unDraw/WeatherApp", component: WeatherApp };

export default meta;
type Story = StoryObj<typeof WeatherApp>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
