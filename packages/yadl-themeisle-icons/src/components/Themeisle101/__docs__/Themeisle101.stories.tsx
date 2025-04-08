import type { Meta, StoryObj } from "@storybook/react";
import Themeisle101 from "../Themeisle101";

const meta: Meta<typeof Themeisle101> = { title: "Themeisle/Themeisle101", component: Themeisle101 };

export default meta;
type Story = StoryObj<typeof Themeisle101>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
