import type { Meta, StoryObj } from "@storybook/react";
import Themeisle337 from "../Themeisle337";

const meta: Meta<typeof Themeisle337> = { title: "Themeisle/Themeisle337", component: Themeisle337 };

export default meta;
type Story = StoryObj<typeof Themeisle337>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
