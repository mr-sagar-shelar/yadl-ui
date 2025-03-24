import type { Meta, StoryObj } from "@storybook/react";
import Themeisle315 from "../Themeisle315";

const meta: Meta<typeof Themeisle315> = { title: "Themeisle/Themeisle315", component: Themeisle315 };

export default meta;
type Story = StoryObj<typeof Themeisle315>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
