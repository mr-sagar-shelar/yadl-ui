import type { Meta, StoryObj } from "@storybook/react";
import Themeisle283 from "../Themeisle283";

const meta: Meta<typeof Themeisle283> = { title: "Themeisle/Themeisle283", component: Themeisle283 };

export default meta;
type Story = StoryObj<typeof Themeisle283>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
