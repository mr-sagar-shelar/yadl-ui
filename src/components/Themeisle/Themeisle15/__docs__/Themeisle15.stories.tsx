import type { Meta, StoryObj } from "@storybook/react";
import Themeisle15 from "../Themeisle15";

const meta: Meta<typeof Themeisle15> = { title: "Themeisle/Themeisle15", component: Themeisle15 };

export default meta;
type Story = StoryObj<typeof Themeisle15>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
