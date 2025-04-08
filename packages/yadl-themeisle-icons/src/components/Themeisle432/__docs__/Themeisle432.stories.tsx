import type { Meta, StoryObj } from "@storybook/react";
import Themeisle432 from "../Themeisle432";

const meta: Meta<typeof Themeisle432> = { title: "Themeisle/Themeisle432", component: Themeisle432 };

export default meta;
type Story = StoryObj<typeof Themeisle432>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
