import type { Meta, StoryObj } from "@storybook/react";
import Weather from "../Weather";

const meta: Meta<typeof Weather> = { title: "unDraw/Weather", component: Weather };

export default meta;
type Story = StoryObj<typeof Weather>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
