import type { Meta, StoryObj } from "@storybook/react";
import Themeisle206 from "../Themeisle206";

const meta: Meta<typeof Themeisle206> = { title: "Themeisle/Themeisle206", component: Themeisle206 };

export default meta;
type Story = StoryObj<typeof Themeisle206>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
