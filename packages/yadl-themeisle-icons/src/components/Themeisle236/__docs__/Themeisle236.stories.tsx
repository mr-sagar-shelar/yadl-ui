import type { Meta, StoryObj } from "@storybook/react";
import Themeisle236 from "../Themeisle236";

const meta: Meta<typeof Themeisle236> = { title: "Themeisle/Themeisle236", component: Themeisle236 };

export default meta;
type Story = StoryObj<typeof Themeisle236>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
