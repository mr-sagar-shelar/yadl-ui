import type { Meta, StoryObj } from "@storybook/react";
import Themeisle311 from "../Themeisle311";

const meta: Meta<typeof Themeisle311> = { title: "Themeisle/Themeisle311", component: Themeisle311 };

export default meta;
type Story = StoryObj<typeof Themeisle311>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
