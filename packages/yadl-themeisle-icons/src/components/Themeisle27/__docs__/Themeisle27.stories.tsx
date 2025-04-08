import type { Meta, StoryObj } from "@storybook/react";
import Themeisle27 from "../Themeisle27";

const meta: Meta<typeof Themeisle27> = { title: "Themeisle/Themeisle27", component: Themeisle27 };

export default meta;
type Story = StoryObj<typeof Themeisle27>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
