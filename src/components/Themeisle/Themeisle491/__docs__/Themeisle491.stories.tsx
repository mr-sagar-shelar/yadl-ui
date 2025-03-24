import type { Meta, StoryObj } from "@storybook/react";
import Themeisle491 from "../Themeisle491";

const meta: Meta<typeof Themeisle491> = { title: "Themeisle/Themeisle491", component: Themeisle491 };

export default meta;
type Story = StoryObj<typeof Themeisle491>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
