import type { Meta, StoryObj } from "@storybook/react";
import Themeisle136 from "../Themeisle136";

const meta: Meta<typeof Themeisle136> = { title: "Themeisle/Themeisle136", component: Themeisle136 };

export default meta;
type Story = StoryObj<typeof Themeisle136>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
