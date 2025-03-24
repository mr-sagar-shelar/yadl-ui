import type { Meta, StoryObj } from "@storybook/react";
import Themeisle109 from "../Themeisle109";

const meta: Meta<typeof Themeisle109> = { title: "Themeisle/Themeisle109", component: Themeisle109 };

export default meta;
type Story = StoryObj<typeof Themeisle109>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
