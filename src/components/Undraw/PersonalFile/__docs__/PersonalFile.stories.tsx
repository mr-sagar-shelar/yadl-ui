import type { Meta, StoryObj } from "@storybook/react";
import PersonalFile from "../PersonalFile";

const meta: Meta<typeof PersonalFile> = { title: "unDraw/PersonalFile", component: PersonalFile };

export default meta;
type Story = StoryObj<typeof PersonalFile>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
