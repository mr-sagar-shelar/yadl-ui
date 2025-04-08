import type { Meta, StoryObj } from "@storybook/react";
import Themeisle117 from "../Themeisle117";

const meta: Meta<typeof Themeisle117> = { title: "Themeisle/Themeisle117", component: Themeisle117 };

export default meta;
type Story = StoryObj<typeof Themeisle117>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
