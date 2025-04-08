import type { Meta, StoryObj } from "@storybook/react";
import Themeisle500 from "../Themeisle500";

const meta: Meta<typeof Themeisle500> = { title: "Themeisle/Themeisle500", component: Themeisle500 };

export default meta;
type Story = StoryObj<typeof Themeisle500>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
