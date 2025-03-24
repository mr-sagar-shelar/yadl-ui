import type { Meta, StoryObj } from "@storybook/react";
import Themeisle422 from "../Themeisle422";

const meta: Meta<typeof Themeisle422> = { title: "Themeisle/Themeisle422", component: Themeisle422 };

export default meta;
type Story = StoryObj<typeof Themeisle422>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
