import type { Meta, StoryObj } from "@storybook/react";
import Themeisle272 from "../Themeisle272";

const meta: Meta<typeof Themeisle272> = { title: "Themeisle/Themeisle272", component: Themeisle272 };

export default meta;
type Story = StoryObj<typeof Themeisle272>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
