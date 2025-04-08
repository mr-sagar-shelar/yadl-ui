import type { Meta, StoryObj } from "@storybook/react";
import PersonalDocuments from "../PersonalDocuments";

const meta: Meta<typeof PersonalDocuments> = { title: "unDraw/PersonalDocuments", component: PersonalDocuments };

export default meta;
type Story = StoryObj<typeof PersonalDocuments>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
