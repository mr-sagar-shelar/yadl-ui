import type { Meta, StoryObj } from "@storybook/react";
import Themeisle488 from "../Themeisle488";

const meta: Meta<typeof Themeisle488> = { title: "Themeisle/Themeisle488", component: Themeisle488 };

export default meta;
type Story = StoryObj<typeof Themeisle488>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
