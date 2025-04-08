import type { Meta, StoryObj } from "@storybook/react";
import Themeisle83 from "../Themeisle83";

const meta: Meta<typeof Themeisle83> = { title: "Themeisle/Themeisle83", component: Themeisle83 };

export default meta;
type Story = StoryObj<typeof Themeisle83>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
