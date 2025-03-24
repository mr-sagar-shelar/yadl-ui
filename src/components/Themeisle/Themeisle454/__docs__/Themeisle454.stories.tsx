import type { Meta, StoryObj } from "@storybook/react";
import Themeisle454 from "../Themeisle454";

const meta: Meta<typeof Themeisle454> = { title: "Themeisle/Themeisle454", component: Themeisle454 };

export default meta;
type Story = StoryObj<typeof Themeisle454>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
