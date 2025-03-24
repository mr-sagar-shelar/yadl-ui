import type { Meta, StoryObj } from "@storybook/react";
import Themeisle333 from "../Themeisle333";

const meta: Meta<typeof Themeisle333> = { title: "Themeisle/Themeisle333", component: Themeisle333 };

export default meta;
type Story = StoryObj<typeof Themeisle333>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
