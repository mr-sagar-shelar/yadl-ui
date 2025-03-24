import type { Meta, StoryObj } from "@storybook/react";
import Themeisle104 from "../Themeisle104";

const meta: Meta<typeof Themeisle104> = { title: "Themeisle/Themeisle104", component: Themeisle104 };

export default meta;
type Story = StoryObj<typeof Themeisle104>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
