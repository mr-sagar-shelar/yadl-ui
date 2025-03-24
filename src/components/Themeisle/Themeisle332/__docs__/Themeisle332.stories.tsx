import type { Meta, StoryObj } from "@storybook/react";
import Themeisle332 from "../Themeisle332";

const meta: Meta<typeof Themeisle332> = { title: "Themeisle/Themeisle332", component: Themeisle332 };

export default meta;
type Story = StoryObj<typeof Themeisle332>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
