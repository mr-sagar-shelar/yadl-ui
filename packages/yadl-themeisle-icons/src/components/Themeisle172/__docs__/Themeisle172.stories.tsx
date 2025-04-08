import type { Meta, StoryObj } from "@storybook/react";
import Themeisle172 from "../Themeisle172";

const meta: Meta<typeof Themeisle172> = { title: "Themeisle/Themeisle172", component: Themeisle172 };

export default meta;
type Story = StoryObj<typeof Themeisle172>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
