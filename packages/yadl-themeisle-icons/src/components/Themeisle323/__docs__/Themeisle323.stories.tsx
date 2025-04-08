import type { Meta, StoryObj } from "@storybook/react";
import Themeisle323 from "../Themeisle323";

const meta: Meta<typeof Themeisle323> = { title: "Themeisle/Themeisle323", component: Themeisle323 };

export default meta;
type Story = StoryObj<typeof Themeisle323>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
