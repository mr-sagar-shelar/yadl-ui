import type { Meta, StoryObj } from "@storybook/react";
import Themeisle139 from "../Themeisle139";

const meta: Meta<typeof Themeisle139> = { title: "Themeisle/Themeisle139", component: Themeisle139 };

export default meta;
type Story = StoryObj<typeof Themeisle139>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
