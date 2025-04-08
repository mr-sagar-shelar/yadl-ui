import type { Meta, StoryObj } from "@storybook/react";
import Date_nightDateNight from "../Date_nightDateNight";

const meta: Meta<typeof Date_nightDateNight> = { title: "unDraw/Date_nightDateNight", component: Date_nightDateNight };

export default meta;
type Story = StoryObj<typeof Date_nightDateNight>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
