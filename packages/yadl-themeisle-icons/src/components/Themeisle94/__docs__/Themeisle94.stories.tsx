import type { Meta, StoryObj } from "@storybook/react";
import Themeisle94 from "../Themeisle94";

const meta: Meta<typeof Themeisle94> = { title: "Themeisle/Themeisle94", component: Themeisle94 };

export default meta;
type Story = StoryObj<typeof Themeisle94>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
