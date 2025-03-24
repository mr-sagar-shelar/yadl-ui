import type { Meta, StoryObj } from "@storybook/react";
import Themeisle93 from "../Themeisle93";

const meta: Meta<typeof Themeisle93> = { title: "Themeisle/Themeisle93", component: Themeisle93 };

export default meta;
type Story = StoryObj<typeof Themeisle93>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
