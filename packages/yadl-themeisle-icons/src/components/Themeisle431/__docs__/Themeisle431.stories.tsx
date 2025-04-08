import type { Meta, StoryObj } from "@storybook/react";
import Themeisle431 from "../Themeisle431";

const meta: Meta<typeof Themeisle431> = { title: "Themeisle/Themeisle431", component: Themeisle431 };

export default meta;
type Story = StoryObj<typeof Themeisle431>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
