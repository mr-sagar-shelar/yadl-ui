import type { Meta, StoryObj } from "@storybook/react";
import Themeisle310 from "../Themeisle310";

const meta: Meta<typeof Themeisle310> = { title: "Themeisle/Themeisle310", component: Themeisle310 };

export default meta;
type Story = StoryObj<typeof Themeisle310>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
