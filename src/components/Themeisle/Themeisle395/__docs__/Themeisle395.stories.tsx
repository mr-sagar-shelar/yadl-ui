import type { Meta, StoryObj } from "@storybook/react";
import Themeisle395 from "../Themeisle395";

const meta: Meta<typeof Themeisle395> = { title: "Themeisle/Themeisle395", component: Themeisle395 };

export default meta;
type Story = StoryObj<typeof Themeisle395>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
