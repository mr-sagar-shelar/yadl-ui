import type { Meta, StoryObj } from "@storybook/react";
import WeatherNotification from "../WeatherNotification";

const meta: Meta<typeof WeatherNotification> = { title: "unDraw/WeatherNotification", component: WeatherNotification };

export default meta;
type Story = StoryObj<typeof WeatherNotification>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
