import type { Meta, StoryObj } from "@storybook/react";
import Themeisle397 from "../Themeisle397";

const meta: Meta<typeof Themeisle397> = { title: "Themeisle/Themeisle397", component: Themeisle397 };

export default meta;
type Story = StoryObj<typeof Themeisle397>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
