import type { Meta, StoryObj } from "@storybook/react";
import Themeisle114 from "../Themeisle114";

const meta: Meta<typeof Themeisle114> = { title: "Themeisle/Themeisle114", component: Themeisle114 };

export default meta;
type Story = StoryObj<typeof Themeisle114>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
